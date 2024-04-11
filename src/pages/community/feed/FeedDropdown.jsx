import useDetectClose from '@hooks/useDetectClose.mjs'
import React, { useRef } from 'react'
import styled from 'styled-components'
import iconedit from '../../../assets/icon-edit.svg'
import icondelete from '../../../assets/icon-delete.svg'
import iconmore from '../../../assets/icon-more.svg'

const StyledDropDown = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
  `

const EditMenu = styled.div`
    position: absolute;

    text-align: center;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.3s ease, transform 0.4s ease, visibility 0.4s;
    padding: 10px;
`

const OpenMenu = styled.div`
    width: 100px;
    padding: 1rem;
    opacity: 1;
    visibility: visible;
    transform: translateY(20);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border: 1px solid #000000;
    border-radius: 8px;
    font-size: 2rem;
    line-height: 2;

    & img {
      margin-right: 1rem;
      vertical-align: center;
    }

    & span {
      padding-bottom: 2rem;
    }

`

function FeedDropdown() {
    const dropDownRef = useRef(null)
    const [ isOpen, setIsOpen ] = useDetectClose(dropDownRef, false);

  return (
    <StyledDropDown>
        <button onClick={()=>setIsOpen(!isOpen)}>{!isOpen ? <img src={iconmore}/>
        : null}
        </button>    
        {!isOpen ? (<EditMenu></EditMenu> ) : 
        (<OpenMenu>
          <div>
            <img src={iconedit} alt="#"/>
            <span>수정</span>
          </div>
          <div>
            <img src={icondelete} alt="#"/>
            <span>삭제</span>
          </div>
        </OpenMenu>)
        }
    </StyledDropDown>
  )
}

export default FeedDropdown