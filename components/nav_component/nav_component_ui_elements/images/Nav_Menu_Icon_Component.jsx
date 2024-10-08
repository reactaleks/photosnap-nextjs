export default function NavMenuIcon({ navMenuOpen, openNavMenu }) {
  if (!navMenuOpen) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="6"
        onClick={openNavMenu}
        className="md:hidden"

      >
        <g fillRule="evenodd">
          <path d="M0 0h20v1H0zM0 5h20v1H0z" />
        </g>
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="15"
        onClick={openNavMenu}
        className="md:hidden"
      >
        <path
          fillRule="evenodd"
          d="M14.718.075l.707.707L8.707 7.5l6.718 6.718-.707.707L8 8.207l-6.718 6.718-.707-.707L7.293 7.5.575.782l.707-.707L8 6.793 14.718.075z"
        />
      </svg>
    );
  }
}
