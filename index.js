const day = 24 * 60 * 60 * 1000

const Range = (range, date) => {
    const formattedDate = new Date(date).getTime()
    const datesArray = []
    
    for (let i = 0; i < range.length; i++) {
        const dateArray = []
        const modifyArray = range[i].split('-')
        const startRange = new Date(modifyArray[0]).getTime()
        const endRange = new Date(modifyArray[1]).getTime()
        let counter = startRange

        while (counter <= endRange) {
            const nextDay = counter + day
            dateArray.push(new Date(nextDay).getTime())
            counter +=  day
        }

        datesArray.push(dateArray)
    }


    const transformedArray = []
    for (let i = 0; i < datesArray.length; i++) {
        const index = datesArray[i].indexOf(formattedDate)

        if (index > -1) {
            transformedArray.push(datesArray[i].slice(0, index), datesArray[i].slice(index))
        } else {
            transformedArray.push(datesArray[i])
        }
    }
    
    return transformedArray 
}

Range(['2020/01/01-2021/01/01', '2021/01/02-2021/02/01'],  '2020/06/07')