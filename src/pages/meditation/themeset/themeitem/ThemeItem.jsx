import PropTypes from 'prop-types';
import {
  Lock,
  Icon,
  Theme,
  Price,
  Contents,
  LockIcon,
  PaidBadge,
  StyledDiv,
  ThemeButton,
  ThemeDescription,
} from '@pages/meditation/themeset/themeitem/ThemeItem.style';
import iconMusic from '@assets/images/icon-music.svg';
import iconLock from '@assets/images/icon-lock.svg';

function ThemeItem({ item, handleTheme, isNotPaid }) {
  console.log(item);
  function handleClick() {
    handleTheme(item.name, item._id, item.extra.background, isNotPaid);
  }

  return (
    <Theme>
      <ThemeButton
        type="button"
        onClick={handleClick}
        $bgColor={item.extra.background}
      >
        <Contents
          $url={`${import.meta.env.VITE_API_SERVER}${item.mainImages[0]['path']}`}
        >
          <Icon src={iconMusic} alt="테마 재생" />
          <ThemeDescription>{item.name}</ThemeDescription>
        </Contents>

        {item.price > 0 && isNotPaid && (
          <>
            <Lock />
            <StyledDiv>
              <LockIcon src={iconLock} alt="유료 테마" />
              <Price>{item.price.toLocaleString()}원</Price>
            </StyledDiv>
          </>
        )}

        {item.price > 0 && !isNotPaid && (
          <>
            <StyledDiv>
              <PaidBadge>구매함</PaidBadge>
            </StyledDiv>
          </>
        )}
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
