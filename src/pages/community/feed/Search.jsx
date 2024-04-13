import styled from "styled-components";
import iconsearch from "@assets/icon-search.svg"

const SearchBar = styled.div`
    display: flex;
    justify-content: center;
    height: 42px;
    min-width: 260px;
    margin: 1rem 0 2.4rem;
    position: relative;

    & input {
    width: 342px;
    border-radius: 0.4rem;
    border: 1px solid #949494;
    }
`

function Search(){
    return(
        <SearchBar>
            {/* input 안에 버튼 넣을방법 찾기 */}
        <input type="image" src={iconsearch} alt="찾기 버튼" />
        </SearchBar>
    )
}

export default Search;