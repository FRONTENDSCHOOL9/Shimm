import PropTypes from 'prop-types';
import {
  Lock,
  Icon,
  Theme,
  Price,
  Contents,
  LockIcon,
  StyledDiv,
  ThemeButton,
  ThemeDescription,
} from '@components/themeset/themeitem/ThemeItem.style';
import iconMusic from '@assets/images/icon-music.svg';
import iconLock from '@assets/images/icon-lock.svg';

function ThemeItem({ item, handleTheme }) {
  const { nameKor: kor, nameEng: eng, paid, code } = item;

  function handleClick() {
    handleTheme(kor, paid);
  }

  return (
    <Theme>
      <ThemeButton type="button" onClick={handleClick} $themeCode={code}>
        <Contents>
          <Icon src={iconMusic} alt={kor} />
          <ThemeDescription>
            {kor} {eng}
          </ThemeDescription>
          {paid ? (
            ''
          ) : (
            <>
              <Lock />
              <StyledDiv>
                <LockIcon src={iconLock} alt="구매 필요" />
                <Price>1000원</Price>
              </StyledDiv>
            </>
          )}
        </Contents>
      </ThemeButton>
    </Theme>
  );
}

ThemeItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.number,
    nameKor: PropTypes.string,
    nameEng: PropTypes.string,
    paid: PropTypes.bool,
    handleTheme: PropTypes.func,
  }),
};

export default ThemeItem;
