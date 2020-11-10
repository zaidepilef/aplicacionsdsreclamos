import React from 'react'

import CardBox from 'components/CardBox';
import Button from '@material-ui/core/Button';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js'

import SearchInput from './SearchInput';

const SectionHeaders = ({setQueryInput}) => {
    return (
            <CardBox styleName="col-lg-12">
                <div className="row" >
                    <div className="col align-self-center">
                        <Button
                            variant="contained" color="primary"
                            className="jr-btn jr-btn-lg"
                        >
                            <Icon path={mdiPlus}
                                title="Agregar"
                                size={1}
                            /> Agregar
                        </Button>
                    </div>
                    <div>
                        <SearchInput
                            setQueryInput={setQueryInput}
                        />
                    </div>
                </div>
            </CardBox>
    )
}

export default SectionHeaders
