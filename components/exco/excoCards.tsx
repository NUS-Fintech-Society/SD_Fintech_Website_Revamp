import CardProps from '@interfaces/exco/card';

const ExcoCard = ({exco} : CardProps) => {
    return (
        <>
        <div className="section-my mx-auto w-[80%]">
            <h4 className="mb-1">{exco.role}</h4>
            <h4 className="mb-1">{exco.designation}</h4>
            <h4 className="mb-1">{exco.name}</h4>
            <h4 className="mb-1">{exco.text}</h4>
        </div>
        </>
    )
}

export default ExcoCard;