import ExcoCard from '@components/exco/excoCards';
import { Fragment } from 'react';
import HierarchyProps from '@interfaces/exco/hierarchy';

const Hierarchy = ({categories} : HierarchyProps) => {
    return (
        <>
        <div>
            <>
            {categories.map(({header, subcategories}) => {
                return(
                    <Fragment key={header}>
                        <h1>{header}</h1>
                        <div>
                            {subcategories.map(({header, excos}) => {
                                return (
                                    <Fragment key={header}>
                                        <h3>{header}</h3>
                                        <div>
                                            {excos.map((exco) => {
                                                return(
                                                    <Fragment key={header}>
                                                        <ExcoCard exco={exco}/>
                                                    </Fragment>
                                                )
                                            })}
                                        </div>
                                    </Fragment>
                                )
                            })}
                        </div>
                    </Fragment>
                );
            })}
            </>
        </div>
        
        </>
    )
}

export default Hierarchy;