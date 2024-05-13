import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Avatar from "@/components/Avatar";
import Heading from "@/components/Heading";

type Props = {};
export default function AboutPage({}: Props) {
  return (
    <Bounded>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading size="xl" className="col-start-1">
          Heading
        </Heading>

        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          <span>@text@ body</span>
        </div>
        <Button linkField="" label="" />

        <Avatar
          image=""
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
}
