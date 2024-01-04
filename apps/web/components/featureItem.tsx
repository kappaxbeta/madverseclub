
export interface FeatureItemProp {
  title: string;
  tag: string;
  caption: string;

}
export default function FeatureItem({title, tag, caption} : FeatureItemProp) {
  return <div className="flex flex-col justify-center space-y-4">
    <div className="space-y-2">
      <div className="inline-block rounded-lg bg-red-500 px-3 py-1 text-sm text-white">{tag}</div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-700 dark:text-gray-300">
        {title}
      </h2>
      <p
        className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        {caption}
      </p>
    </div>
  </div>
}
