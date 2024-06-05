import Image from "next/image";
import * as runtime from "react/jsx-runtime";

const useMdxComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  // h1: (props: any) => <h1 style={{ color: "red" }} {...props} />,
  // h2: (props: any) => <h2 style={{ color: "blue" }} {...props} />,
  // h3: (props: any) => <h3 style={{ color: "green" }} {...props} />,
  // p: (props: any) => <p {...props} />,
};

interface MdxProps {
  code: string;
}

const MdxComponent = ({ code }: MdxProps) => {
  const Component = useMdxComponent(code);
  return <Component components={components} />;
};

export default MdxComponent;
