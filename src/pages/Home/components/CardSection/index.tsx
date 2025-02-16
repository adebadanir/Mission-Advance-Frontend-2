import { Cards } from "./components/Cards";
import { Tabs } from "./components/Tabs";
import { courses } from "./data/courseData";

export function CardSection() {
  return (
    <div className="flex w-full max-w-[320px] flex-col gap-[24px] sm:h-auto sm:max-w-[1440px] sm:gap-[32px]">
      <div className="flex w-full max-w-[320px] flex-col gap-[10px] sm:h-auto sm:max-h-[67px] sm:w-auto sm:max-w-[623px]">
        <h3 className="text-heading-3-mobile font-heading-3 text-dark-primary sm:text-heading-3">
          Koleksi Video Pembelajaran Unggulan
        </h3>
        <p className="text-body-medium-mobile font-medium text-dark-secondary sm:text-body-medium sm:tracking-medium">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>
      <Tabs
        labels={[
          "Semua Kelas",
          "Pemasaran",
          "Desain",
          "Pengembangan Diri",
          "Bisnis",
        ]}
      />
      <div className="grid w-full max-w-[320px] grid-cols-1 gap-[20px] sm:max-w-[1200px] sm:grid-cols-3 sm:gap-[24px]">
        {courses.map((course, index) => (
          <Cards key={index} {...course} />
        ))}
      </div>
    </div>
  );
}
