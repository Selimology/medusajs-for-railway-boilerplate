interface TopBannerProps {
  slogan: string
}

const TopBanner = ({ slogan }: TopBannerProps) => {
  return <div>{slogan}</div>
}

export default TopBanner
