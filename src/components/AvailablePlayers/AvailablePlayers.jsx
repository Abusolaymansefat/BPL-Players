import React, { use } from 'react';

const AvailablePlayers = ({ playersPromise }) => {
        const players = use(playersPromise)
        console.log(players)
        return (
                <div>
                     <h1 className="text-3xl font-bold text-center my-10">Available Players</h1>   
                </div>
        );
};

export default AvailablePlayers;