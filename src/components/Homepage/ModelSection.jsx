import Model from "./Model";
const ModelSection = () => {
  return (
    <div className="md:flex gap-10 overflow-hidden items-center w-[80%] m-auto pt-14 h-[600px] relative">
      <Model />
      <section
        className="flex flex-col gap-10 mb-10 w-[60%] ml-auto">
        <p className="text-slate-100 font-thin text-xl mx-auto"x>
          "Explore this 3D model by rotating it! Click and drag on the model to
          see it from different angles."
        </p>
      </section>
    </div>
  );
};

export default ModelSection;
