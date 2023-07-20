import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/selectors';
import { BiSolidUser } from 'react-icons/bi';
import { LuLogOut } from 'react-icons/lu';
import { logout } from 'redux/operations';

export default function UserMenu() {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <>
      <p>
        <BiSolidUser />
        {userName}
      </p>
      <button type="button" onClick={() => dispatch(logout())}>
        <LuLogOut />
      </button>
    </>
  );
}
