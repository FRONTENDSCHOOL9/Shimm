import useDetectClose from '@hooks/useDetectClose.mjs'
import useClickOutside from '@hooks/useClickOutside.mjs'
import React, { useRef } from 'react'
import styled from 'styled-components'
import iconedit from '../../../assets/icon-edit.svg'
import icondelete from '../../../assets/icon-delete.svg'
import iconmore from '../../../assets/icon-more.svg'
import { Link } from 'react-router-dom'

const StyledDropDown = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
`

const MoreButton = styled.button`
    margin-left: auto;
`

const Menu = styled.div`
    position: absolute;
    text-align: center;
    transform: translate(-10px);
    transition: opacity 0.3s ease, transform 0.4s ease, visibility 0.2s;
`

const OpenMenu = styled.div`
    background-color: white;
    width: 100%;
    min-width: 2rem;
    padding: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #000000;
    border-radius: 8px;
    font-size: 2rem;
    line-height: 1.8;
    
    & img {
      width: 2rem;
      margin-right: 1rem;
      vertical-align: center;
    }

    & span {
      padding-bottom: 2rem;
    }

`

function FeedDropDown() {
    const menuRef = useRef('menu') 
    const dropDownRef = useRef(null)
    const [ isOpen, setIsOpen ] = useDetectClose(dropDownRef, false);

    useClickOutside(menuRef, () => {
      if(isOpen) {
        setIsOpen(false);
      }
    })

  return (
    <StyledDropDown ref={menuRef}>
        <MoreButton onClick={()=>setIsOpen(!isOpen)}> <img src={iconmore}/>
        
        </MoreButton>    
        {!isOpen ? (<Menu></Menu> ) : 
        (<OpenMenu>
          <div>
            <img src={iconedit} alt="#"/>
            <Link to='/'>수정</Link>
          </div>
          <div>
            <img src={icondelete} alt="#"/>
            <Link to='/'>삭제</Link>
          </div>
        </OpenMenu>)
        }
    </StyledDropDown>
  )
}

export default FeedDropDown