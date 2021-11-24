import React from 'react'
import styled from 'styled-components';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import globalStyles from '../../styles/globalStyles'

const StyledSearch = styled.div`
    align-items: center;
    border: 1px solid;
    border-color: ${globalStyles.color.border};
    border-radius: 15px;
    padding-left: 15px;
    max-width: 450px;
    .icon {
        color: ${globalStyles.color.soft_gray};
        width: 16px;
    }
`

const StyledInput = styled.input`
    border: none;
    border-radius: 15px;
    width: 400px;
    padding: 10px;
    color: ${globalStyles.color.gray};
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: ${globalStyles.color.soft_gray};
    }
`

interface Props {
    placeholder: string
    keyword?: () => void
}

export const SearchBar: React.FC<Props> = (props) => {
    return (
        <StyledSearch>
            <FontAwesomeIcon className="icon" icon={faSearch} />
            <StyledInput type="text" placeholder={`${props.placeholder}`} name="search" />
        </StyledSearch>
    )
}