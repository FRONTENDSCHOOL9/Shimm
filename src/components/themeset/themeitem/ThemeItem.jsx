import PropTypes from 'prop-types';
import {
  Theme,
  ThemeButton,
  ThemePreview,
  ThemeDescription,
} from '@components/themeset/themeitem/ThemeItem.style';

function ThemeItem({ item, handleTheme }) {
  const { nameKor: kor, nameEng: eng } = item;

  function handleClick() {
    handleTheme(kor);
  }

  return (
    <Theme>
      <ThemeButton type="button" onClick={handleClick}>
        <ThemePreview />
        <ThemeDescription>{kor}</ThemeDescription>
        <ThemeDescription>{eng}</ThemeDescription>
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
