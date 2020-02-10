let defaultSaveData = 
{
    maxAgentsPerTeam: 20,
    maxProjectiles: 100,
    teams: [
        {
            currentAgents: undefined,
            movesMade: 0,
            isPlaying: true,
            killCount: [0,0,0],
            agents: [{
                collideRadius: 0.5,
                x: 8.5,
                y: 1.5,
                velocityX: 0,
                velocityY: 0,
                inUse: true,
                team: 0,    
                health: 10,
                speed: 5,
                maxHealth: 10,
            },
            {
                collideRadius: 0.5,
                x: 4,
                y: 12,
                velocityX: 0,
                velocityY: 0,
                inUse: true,
                team: 0,    
                health: 10,
                speed: 5,
                maxHealth: 10,
            }]
        },
        {
            currentAgents: undefined,
            movesMade: 0,
            isPlaying: true,
            killCount: [0,0,0],
            agents: [
                {
                    collideRadius: 0.5,
                    x: 13,
                    y: 3,
                    velocityX: 0,
                    velocityY: 0,
                    inUse: true,
                    team: 1,    
                    health: 10,
                    speed: 5,
                    maxHealth: 10,
                },
                {
                    collideRadius: 0.5,
                    x: 13,
                    y: 13,
                    velocityX: 0,
                    velocityY: 0,
                    inUse: true,
                    team: 1,    
                    health: 10,
                    speed: 5,
                    maxHealth: 10,
                }]
        },
        {
            currentAgents: undefined,
            movesMade: 0,
            isPlaying: true,
            killCount: [0,0,0],
            agents: [
                {
                    collideRadius: 0.5,

                    x: 1.5,
                    y: 1.5,
                    velocityX: 0,
                    velocityY: 0,
                    inUse: true,
                    team: 2,    
                    health: 10,
                    speed: 5,
                    maxHealth: 10,
                }
            ]
        }
    ],
    map: [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],//0
          [1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1],
          [1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1],
          [1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1],
          [1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1],
          [1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1],
          [1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1],
          [1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1],
          [1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1],//8
          [1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1],
          [1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1],
          [1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1],
          [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
          [1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1],
          [1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1],
          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],//15
}
export { defaultSaveData };