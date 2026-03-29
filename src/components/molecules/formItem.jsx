import { Input } from "../atoms/inputs"
import { Label } from "../atoms/labels"
import { Select } from "../atoms/select"

function FormItem({ 
  formFields,
  inputVariant = 'default',
  inputAlign = 'left',
  inputSize = 'small',
  selectVariant = 'default',
  selectSize = 'small'
}) {
  return (
    <div className="flex flex-col gap-6 w-full">

      {formFields.map((item, i) => {

        // GRUPOS (como celular/personas, fecha/hora...)
        if (Array.isArray(item)) {
          return (
            <div 
              key={i} 
              className="
                grid 
                grid-cols-1 
                md:grid-cols-2 
                gap-10
                w-full
              "
            >
              {item.map((field, j) => (
                <div key={j} className="flex flex-col gap-2 w-full">

                  <Label
                    text={field.text}
                    htmlFor={field.htmlFor}
                    className="text-sm sm:text-base"
                  />

                  {field.type === 'select' ? (
                    <Select
                      name={field.name}
                      value={field.value}
                      options={field.options}
                      onChange={field.onChange}
                      variant={selectVariant}
                      size={selectSize}
                    />
                  ) : (
                    <Input
                      type={field.type}
                      name={field.name}
                      value={field.value}
                      placeholder={field.placeholder}
                      onChange={field.onChange}
                      variant={inputVariant}
                      align={inputAlign}
                      size={inputSize}
                    />
                  )}

                </div>
              ))}
            </div>
          );
        }

        // CAMPO INDIVIDUAL
        return (
          <div key={i} className="flex flex-col gap-2 w-full">

            <Label
              text={item.text}
              htmlFor={item.htmlFor}
              className="text-sm sm:text-base"
            />

            {item.type === 'select' ? (
              <Select
                name={item.name}
                value={item.value}
                options={item.options}
                onChange={item.onChange}
                variant={selectVariant}
                size={selectSize}
              />
            ) : (
              <Input
                type={item.type}
                name={item.name}
                value={item.value}
                placeholder={item.placeholder}
                onChange={item.onChange}
                align={inputAlign}
                size={inputSize}
                variant={inputVariant}
              />
            )}

          </div>
        );
      })}

    </div>
  );
}

export { FormItem }
