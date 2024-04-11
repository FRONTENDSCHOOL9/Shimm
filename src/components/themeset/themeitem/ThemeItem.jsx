import PropTypes from 'prop-types';
import {
  Lock,
  Theme,
  Contents,
  Description,
  ThemeButton,
  ThemePreview,
  ThemeDescription,
} from '@components/themeset/themeitem/ThemeItem.style';

function ThemeItem({ item, handleTheme }) {
  const { nameKor: kor, nameEng: eng, paid } = item;

  function handleClick() {
    handleTheme(kor);
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
              <span>잠금</span>
              <span>1000원</span>
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
