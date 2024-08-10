import TextContainer from "./TextContainer";

function Container() {
  return (
    <div className="flex absolute z-[-1]">
      <div className="textContainer fixed basis-[35.9027778%]">
        <TextContainer />
      </div>
      <div className="imageContainer fixed basis-[64.09722222222223%]">
        <div className="fixed truncate white-box">
          <img
            className="model"
            src="https://s3-alpha-sig.figma.com/img/c1ec/1ce1/22dfbf7be177ad93f8d83a122759d65a?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DXBqissACUsS-CqkqFXqkgdw2wH-p75xBISgJL~PTYLX44Eus2QxZahCKSXG2pPqndPagNbicUnik5krptKg6543IMWymP-8e3WBppvAVd7wM6DiJOBI8VxlUG7ieE0lFLpDCUm7Nu5nqwhXoD-LJ-DYVt1ljG4HcQ96hX3NMN0qQAvFlTlhrOob1MxY3q-YxN9AYNbCWlXOEZBW7ItR9E22gqtgeCMNRoBQW9dNTPX6We1G4IsSVhE-5bJWWqBn2HaHccw7hL1mfytERoTmFHI5IZVt3HYr~kCz~IifCXJl~o78e2RaqgAERzFRqg2JVsPBd~n-6hstSyHRbjFbXw__"
            alt="Model"
          />
        </div>
      </div>
    </div>
  );
}

export default Container;
