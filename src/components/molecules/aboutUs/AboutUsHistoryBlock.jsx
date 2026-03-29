import { AboutUsHistoryContainer } from "../../atoms/aboutUs/AboutUsHistoryContainer";
import { Title } from "../../atoms/titles";
import { Paragraph } from "../../atoms/paragraph";

function AboutUsHistoryBlock({ ...props }) {
  return (
    <AboutUsHistoryContainer {...props}>
      <Title
        level="h3"
        text="Nuestra Historia"
        variant="tertiary"
        className="font-joti mb-6 drop-shadow-md"
      />

      <Paragraph
        size="large"
        className="max-w-4xl text-gray-200 leading-relaxed font-light wrap-break-words"
        text="La EMPRESA VIRGEN DEL CARMEN – CELENDIN SRL, fue creada el 13 de octubre 
del 2006. Es una empresa peruana ubicada en Celendín, Cajamarca. Que nació como 
una idea de negocio que se dedica a la elaboración y comercialización de productos 
derivados del cacao. 
Tiene como marca registrada “SHILICOLATE – El Verdadero Sabor Del Chocolate 
Shilico”, teniendo como dueña la Señora Jesús Haydee Briones Sánchez y 
Representante Legal a su hija Lourdes Jacquelin Alva Briones. 
El nombre de SHILICOLATE, nace con ayuda de HAMILTON un joven del estado de 
Texas (Estados Unidos), en ese tiempo llego como voluntario del programa de Cuerpo 
De Paz; ayudando así en el nombre, proponiendo de cómo les dicen a los celendinos 
(SHILICOS), y fusionado con la palabra CHOCOLATE saldría el nombre de 
“SHILICOLATE”. 
Actualmente la empresa, su principal producto es el chocolate al 100% y sus 
derivados: chocolate al 70%, Shilibombones, Chocotejas, Shilicoctel. La cual 
comercializa dentro de la provincia de Celendín, Región Cajamarca, y Costa Central."
      />
    </AboutUsHistoryContainer>
  );
}
export { AboutUsHistoryBlock };
