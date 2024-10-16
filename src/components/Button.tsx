import styled from "styled-components";

const ButtonDesign = styled.button`
  font-weight: bold;
  color: dodgerblue;
  padding: 1;
  background: lightblue;
  border: darkblue;
  border-radius: 3px;
  height: 30px;
  width: 70px;
`;

interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return <ButtonDesign onClick={onClick}>{children}</ButtonDesign>;
};

export default Button;
