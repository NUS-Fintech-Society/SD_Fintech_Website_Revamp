import ExcoCard from '@components/exco/excoCards';
import { Fragment } from 'react';
import HierarchyProps from '@interfaces/exco/hierarchy';
import MaxWidth from '@components/layout/MaxWidth';

const Hierarchy = ({categories} : HierarchyProps) => {
    return (
        <>
        <div>
            <>
            {categories.map(({header, subcategories}) => {
                return(
                    <Fragment key={header}>
                        <div className='m-28'>
                            <h1 className='text-3xl font-medium sm:text-4xl lg:text-5xl'>{header}</h1>
                            <div className='w-full'>
                                {subcategories.map(({header, excos}) => {
                                    return (
                                        <Fragment key={header}>
                                            <div className='mb-14'>
                                                <h2 className='text-2xl font-medium sm:text-3xl lg:text-4xl'>{header}</h2>
                                                <div className='mt-14 flex flex-wrap justify-between'>
                                                    {excos.map((exco) => {
                                                        return(
                                                            <Fragment key={header}>
                                                                <ExcoCard exco={exco}/>
                                                            </Fragment>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </Fragment>
                                        )
                                })}
                            </div>
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