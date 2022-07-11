import { ExcoProps } from '@interfaces/exco';
import TopBanner from '@components/exco/topBanner';
import Hierarchy from '@components/exco/hierarchy';

const Exco = ({departmentExcos} : ExcoProps) => {
    return (
        <>
            <TopBanner/>
            <Hierarchy departmentExcos={departmentExcos} />
        </>
    )
}

export default Exco;