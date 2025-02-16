import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
export function Cards({
  courseImage,
  altCourseImage,
  title,
  description,
  tutorImage,
  tutorAlt,
  tutorName,
  tutorPosition,
  tutorCompany,
  rating,
  reviewCount,
  price,
}: {
  courseImage: string;
  altCourseImage: string;
  title: string;
  description: string;
  tutorImage: string;
  tutorAlt: string;
  tutorName: string;
  tutorPosition: string;
  tutorCompany: string;
  rating: number;
  reviewCount: number;
  price: number;
}) {
  function formatPrice(price: number) {
    return price >= 1000 ? price / 1000 + "K" : price.toString();
  }
  return (
    <div className="flex h-auto max-h-[147px] w-[320px] flex-col gap-[8px] rounded-[10px] border-[1px] border-border bg-primary-background p-[16px] sm:max-h-[426px] sm:w-[384px] sm:gap-[16px] sm:p-[20px]">
      <div className="flex w-full max-w-[288px] flex-row gap-[12px] sm:max-w-[344px] sm:flex-col sm:gap-[16px]">
        <img
          src={courseImage}
          alt={altCourseImage}
          className="h-[82px] w-[82px] rounded-[10px] object-cover sm:h-[193px] sm:w-[344px]"
        />
        <div className="flex flex-col justify-between gap-[8px] sm:gap-[16px]">
          <div className="flex h-auto w-full flex-col sm:max-h-[74px] sm:max-w-[344px] sm:gap-[8px]">
            <h6 className="text-heading-6-mobile font-heading-6 text-dark-primary sm:text-heading-6">
              {title}
            </h6>
            <p className="line-clamp-2 hidden h-full text-ellipsis font-medium-medium text-dark-secondary sm:block sm:max-h-[44px] sm:text-body-medium">
              {description}
            </p>
          </div>
          <div className="flex h-auto w-full gap-[8px] sm:max-h-[42px] sm:max-w-[344px] sm:gap-[10px]">
            <img
              src={tutorImage}
              alt={tutorAlt}
              className="h-[36px] w-[36px] rounded-[10px] sm:h-[40px] sm:w-[40px]"
            />
            <div className="flex h-auto max-h-[37px] w-full max-w-[150px] flex-col sm:max-h-[42px] sm:max-w-[294px]">
              <p className="text-body-medium-mobile font-medium-medium tracking-medium text-dark-primary sm:text-body-medium">
                {tutorName}
              </p>
              <p className="text-body-small-mobile text-nowrap font-small-regular tracking-small text-dark-secondary sm:text-body-small">
                {tutorPosition} <span className="hidden sm:inline">di</span>
                <span className="hidden font-medium-bold sm:inline">
                  {tutorCompany}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-auto w-full items-center justify-between sm:max-h-[29px] sm:max-w-[344px]">
        <div className="flex h-auto w-auto items-center gap-[8px] sm:max-h-[20px] sm:max-w-[151px]">
          <Rating
            name="raing-stars"
            value={rating}
            precision={0.5}
            size="small"
            readOnly
            emptyIcon={
              <StarIcon style={{ color: "#3A35411F" }} fontSize="inherit" />
            }
            sx={{
              "& .MuiRating-iconFilled": {
                color: "#FCE91B",
              },
              "& .MuiRating-iconEmpty": {
                color: "#3A35411F",
              },
            }}
          />
          <p className="text-body-small-mobile text-nowrap tracking-small text-dark-secondary underline sm:text-body-small">
            {rating + " " + `(${reviewCount})`}
          </p>
        </div>
        <h4 className="text-heading-5 font-heading-4 text-primary-default sm:text-heading-4">
          {"Rp " + formatPrice(price)}
        </h4>
      </div>
    </div>
  );
}
