import { TestimonialType } from "types/testimonial"
import Rate from "../rate"

interface TestimonialProps {
  data: TestimonialType
}

const TestimonialItem: React.FC<TestimonialProps> = ({ data }) => {
  return (
    <>
      <div className="testimonial-item style-six h-full">
        <div className="testimonial-main h-full">
          <Rate currentRate={data.star} size={14} />
          <div className="mt-4"> Customer Reviews</div>
          <div className="normal-case font-normal mt-2">{data.description}</div>
          <div className="flex items-center gap-3 mt-4">
            <div>{data.name}</div>
            <div>From {data.address}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialItem
