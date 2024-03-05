export const dataElement = [
    {
        x : document.getElementById('dataX-SSxy'),
        y : document.getElementById('dataY-SSxy')
    },{
        x : document.getElementById('dataX-SSxx')
    },{
        y : document.getElementById('dataY-SSyy'),
    },
    {
        data : {
            x : document.getElementById('dataX-r'),
            y : document.getElementById('dataY-r')
        },totalData : {
            ssxy : document.getElementById('SSxy-r'),
            ssxx : document.getElementById('SSxx-r'),
            ssyy : document.getElementById('SSyy-r')
        }
    }
]

export const SolutionLogic = [
    function ({x , y}) {
        console.log('xy')
        let dataX = x.value.split('$')
        let dataY = y.value.split('$')
        
        dataX = dataX.filter(element => element != '')
        dataY = dataY.filter(element => element != '')
        
        console.log(dataX , dataY)
        if (dataX.length != dataY.length) {
            return alert('Not valid data');
        }

        const sigmaXY = dataX.map((x , i) => x * dataY[i]).reduce((acc , curr) => Number(acc) + Number(curr));
        const sigmaX = dataX.reduce((acc , curr) => Number(acc) + Number(curr));
        const sigmaY = dataY.reduce((acc , curr) => Number(acc) + Number(curr));
        const result = sigmaXY - (((Number(sigmaX) * Number(sigmaY)).toFixed(2))/ Number(dataX.length)).toFixed(2)

        return result.toFixed(2);
    },
    function ({x}) {
        let dataX = x.value.split('$');
        dataX = dataX.filter(element => element != "");
        const dataX2 = dataX.map(x => Number(x) * Number(x)).reduce((acc , curr) => acc + curr);
        const sigmaX = dataX.reduce((acc , curr) => Number(acc) + Number(curr));
        const result = dataX2 - ((sigmaX * sigmaX)/dataX.length).toFixed(2);
        
        return result.toFixed(2);
        
    },
    function ({y}) {
        let dataY = y.value.split('$');
        dataY = dataY.filter(element => element != "");
        
        const dataY2 = dataY.map(y => Number(y) * Number(y)).reduce((acc , curr) => acc + curr);
        const sigmaY = dataY.reduce((acc , curr) => Number(acc) + Number(curr));
        const result = dataY2 - ((sigmaY * sigmaY)/dataY.length).toFixed(2);
        
        return result.toFixed(2)
    },
    {
        data : function ({x , y}) {
            const ssxy = Number(SolutionLogic[0]({x , y}));
            const ssxx = Number(SolutionLogic[1]({x}));
            const ssyy = Number(SolutionLogic[2]({y}));
console.log(ssxy , ssxx , ssyy)
            return SolutionLogic[3].totalData ({ssxy , ssxx , ssyy})
        },
        totalData : function ({ssxy , ssxx , ssyy}) {
            const bottom = (Math.sqrt(Number(ssxx.value) * Number(ssyy.value))).toFixed(2)
            return (Number(ssxy.value) / bottom).toFixed(3);
        }
    }
]