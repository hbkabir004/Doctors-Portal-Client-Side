import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div className={`hero rounded-lg ${bgClass}`}>
            <div className="hero-content flex-col lg:flex-row text-white">
                <img src={icon} className="max-w-sm" alt='' />
                <div>
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <p className="py-6">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;