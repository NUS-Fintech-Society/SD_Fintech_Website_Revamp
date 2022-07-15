//import { ExcoProps } from '@interfaces/exco';
import TopBanner from '@components/exco/topBanner';
import Hierarchy from '@components/exco/hierarchy';
import ExcoProps from '@interfaces/exco/exco'

const Exco = ({categories} : ExcoProps) => {
    return (
        <>
            <TopBanner/>
            <Hierarchy categories={categories} />
        </>
    )
}

export default Exco;