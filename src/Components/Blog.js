import Image from "next/image";

const Blog = () => {
    return (
        <div className="grid grid-cols-2 gap-5 text-sm text-justify">
          <div className="space-y-4">
            <div className="flex gap-5">
              <div className="space-y-4">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore expedita repudiandae est nam ullam sapiente esse
                  iusto, dolorem dolores quisquam corrupti distinctio aut sunt,
                  voluptas iure cumque ipsum eum numquam.
                </p>
                <div className="flex gap-5">
                  <p className="text-justify">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quam error quisquam corporis deserunt cum dolores veniam
                    labore! Esse, sed eius. quisquam corporis deserunt cum
                    dolores veniam labore! Esse, sed eius.
                  </p>

                  <Image src="/asset/Image04.png" width={200} height={200} alt="pokemon" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Tincidunt at cras
                  tortor non volutpat quisque facilisis. Ultricies consequat sed
                  vitae ac. Nisl eu nam id lectus tellus sit egestas. Orci
                  iaculis et vehicula nisi facilisi neque lorem. In vulputate
                  feugiat lobortis eros viverra. Turpis viverra vel fames enim
                  tortor. Scelerisque dictumst aliquam gravida eget ut accumsan.
                  A est dis platea vitae blandit quis.
                </p>
              </div>
              <div className="flex-shrink-0 space-y-5">
                <Image src="/asset/Image03.png" width={200} height={200} alt="pokemon" />
                <Image src="/asset/Image02.png" width={200} height={200} alt="pokemon" />
              </div>
            </div>
            <p>
              At a enim parturient id. Suspendisse ullamcorper fermentum
              accumsan diam tellus. Nibh pretium ultrices scelerisque dolor at
              etiam lectus gravida sed. Sit in turpis suspendisse et aliquam.
              Vulputate sit phasellus proin eget arcu. Enim nec ante velit erat
              nibh nunc amet. Tellus at sit imperdiet non. Cras dictum curabitur
              urna mauris in. Ut dui odio sagittis ut imperdiet ultricies mauris
              ac. A sit id etiam vitae non posuere tristique. Morbi sit mi sed
              nam amet tristique tellus. Sed quam aliquam pharetra nunc ipsum
              mattis. Volutpat pellentesque cras euismod habitant sit nibh.
              Dictum odio at aliquam sed. Orci odio lacinia id sem sed
              suspendisse mi fringilla purus. Quis sed ultricies ac nullam odio.
              Gravida sollicitudin viverra ornare pretium etiam tortor imperdiet
              tellus. Id purus etiam nunc hendrerit quam in. Dui netus lectus
              nulla cursus ultrices nulla. Morbi sit in gravida fermentum. Non
              sed lobortis amet eget sed donec.At a enim parturient id.
              Suspendisse ullamcorper fermentum accumsan diam tellus. Nibh
              pretium ultrices scelerisque dolor at etiam lectus gravida sed.
              Suspendisse ullamcorper fermentum accumsan diam tellus. Nibh
              pretium ultrices scelerisque dolor at etiam lectus gravida sed.
            
            </p>
          </div>
          <div>
            <div className="space-y-4">
              <p>
              Lorem ipsum dolor sit amet consectetur. Risus cursus nibh elementum ornare a aliquet ac. Feugiat scelerisque ultrices tempor facilisi tempus risus nunc. Proin quis morbi posuere nisl etiam scelerisque. Proin pretium gravida semper ut erat nisi. Pulvinar ac mattis porta amet et. Nisl urna non fames felis leo. Vitae pulvinar sed viverra .
              </p>
              <div className="flex gap-5">
                <Image src="/asset/Image05.png" width={200} height={200} alt="pokemon" />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Turpis integer massa
                  consectetur sed enim quis viverra. Vestibulum eu nibh dolor
                  semper. Nisl feugiat quis nec odio pulvinar feugiat velit.
                  Nulla massa sit morbi morbi. Tortor viverra eget lacus
                  feugiat. Tempus vitae vitae orci at ultrices nisi diam
                  faucibus. Ultricies in cursus volutpat aliquam turpis urna in
                  sed. Hendrerit arcu sit lectus adipiscing egestas semper nunc.
                  Ante consectetur id congue pulvinar libero tristique et orci.
                  Platea convallis dictum dui augue. Tincidunt mattis urna sit
                  semper sed duis feugiat mi.Ante consectetur id congue
                </p>
              </div>
              <div className="flex gap-5">
                <Image src="/asset/Image01.png" width={200} height={200} alt="pokemon" />
                <p>
                  Lorem ipsum dolor sit amet consectetur. Turpis integer massa
                  consectetur sed enim quis viverra. Vestibulum eu nibh dolor
                  semper. Nisl feugiat quis nec odio pulvinar feugiat velit.
                  Nulla massa sit morbi morbi. Tortor viverra eget lacus
                  feugiat. Tempus vitae vitae orci at ultrices nisi diam
                  faucibus. Ultricies in cursus volutpat aliquam turpis urna in
                  sed. Hendrerit arcu sit lectus adipiscing egestas semper nunc.
                  Ante consectetur id congue pulvinar libero tristique et orci.
                  Platea convallis dictum dui augue. Tincidunt mattis urna sit
                  semper sed duis feugiat mi.Ante consectetur id congue
                </p>
              </div>
              <p>
                At a enim parturient id. Suspendisse ullamcorper fermentum
                accumsan diam tellus. Nibh pretium ultrices scelerisque dolor at
                etiam lectus gravida sed. Sit in turpis suspendisse et aliquam.
                At a enim parturient id. Suspendisse ullamcorper fermentum
                accumsan diam tellus. Nibh pretium ultrices scelerisque dolor at
                etiam lectus gravida sed. Sit in turpis suspendisse et aliquam.
                Vulputate sit phasellus proin eget arcu. Enim nec ante velit
                erat nibh nunc amet. Tellus at sit imperdiet non. Cras dictum
                curabitur urna mauris in. Ut dui odio sagittis ut imperdiet
                ultricies mauris ac. A sit id etiam vitae non posuere tristique.
                Morbi sit mi sed nam amet tristique tellus. Sed quam aliquam
                pharetra.
              </p>
            </div>
          </div>
        </div>
    );
};

export default Blog;