/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
interface Props {
  src: string;
  width?: string;
  height?: string;
  alt: string;
  className?: string;
}

const Image = ({
  src, width, height, alt, className,
}: Props): JSX.Element => {
  const webp = require(`../../public/assets/${src}?sizes[]=600,sizes[]=1024&format=webp`);
  const img = require(`../../public/assets/${src}?sizes[]=600,sizes[]=1024`);

  return (
    <picture>
      <source srcSet={webp.srcSet} type="image/webp" style={{width: webp.width, height: webp.height}} />
      <img
        src={img.src}
        srcSet={img.srcSet}
        width={width || img.width}
        height={height || img.height}
        alt={alt}
        className={className}
      />
    </picture>
  );
};

Image.defaultProps = {
  className: '',
  height: null,
  width: null,
};

export default Image;
