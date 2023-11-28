type BallOutcome = 'normal' | 'wide' | 'noBall' | 'freeHit' | 'wicket';

type Ball =  {
    type: BallOutcome,
    run: number
    matchId: string,
    batterId: string,
    ballerId: string,
}

type Team  = 'red' | 'green' | 'blue'

type Player = {
    name: string,
    team: Team,
    gender: "male" | 'female' | 'other'
}

type CricketGame = {
    team1: Team,
    team2: Team,
    date: string,
    overs: number,
    femaleOnlyOvers: number
}