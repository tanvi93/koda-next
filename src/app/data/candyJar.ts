
export const wholeContent = {
    headerContent: 'Read my new rules and see how many candies will remain in the jars after each of these incidents.',
    statement1: 'Every time you are good, I add a candy in the \n \'Greg’s Rewards’ jar.',
    statement2: 'Every time you do something wrong, I take a \n candy from the Rewards Jar and put in the \n \'Greg’s Penalty’ jar.',
    rewardValue: 2,
    penaltyValue: 0,
    content: [
        {
            id: 1,
            para: 'Greg was late for school on Tuesday.',
            disableFlag: false,
            habit: 'bad'
        },
        {
            id: 2,
            para: 'Greg worked hard to prepare for his Math test on Tuesday.',
            disableFlag: true,
            habit: 'good'
        },
        {
            id: 3,
            para: 'Greg helped an old lady carry her bags home on Wednesday.',
            disableFlag: true,
            habit: 'good'
        },
        {
            id: 4,
            para: 'Greg troubled a street dog by throwing stones at it on Thursday.',
            disableFlag: true,
            habit: 'bad'
        },
        {
            id: 5,
            para: 'Greg helped mom serve dinner on Friday.',
            disableFlag: true,
            habit: 'good'
        }
    ]
};
