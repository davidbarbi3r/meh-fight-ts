import "../style/Arrow.css"

interface IArrow {
    direction: string,
    onClick: () => void,
    className: string
}

export const Arrow = ({ direction, onClick, className }: IArrow) => (
    <div
      className={`carousel-arrow ${direction} ${className}`}
      onClick={onClick}
    />
);