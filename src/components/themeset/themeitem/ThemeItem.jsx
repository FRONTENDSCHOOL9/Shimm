import PropTypes from 'prop-types';
import {
  Lock,
  Theme,
  Price,
  Contents,
  LockIcon,
  Description,
  ThemeButton,
  ThemePreview,
  ThemeDescription,
} from '@components/themeset/themeitem/ThemeItem.style';

function ThemeItem({ item, handleTheme }) {
  const { nameKor: kor, nameEng: eng, paid } = item;

  function handleClick() {
    handleTheme(kor, paid);
  }

  return (
    <Theme>
      <ThemeButton type="button" onClick={handleClick}>
        <ThemePreview />
        <Contents>
          <Description>
            <ThemeDescription>{kor}</ThemeDescription>
            <ThemeDescription>{eng}</ThemeDescription>
          </Description>
          {paid ? (
            ''
          ) : (
            <Lock>
              <LockIcon>
                <i className="ir">구매 필요</i>
              </LockIcon>
              <Price>1000원</Price>
            </Lock>
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
