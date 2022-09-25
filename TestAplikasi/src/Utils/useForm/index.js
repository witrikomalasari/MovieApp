import {useState} from 'react';

const useForm = initialValue => {
  // console.log('ini initialstate ', initialValue);
  const [form, setForm] = useState(initialValue);

  return [
    form,
    (key, value) => {
      // console.log('coba ajah', key);
      // console.log('coba dua', value);
      if (key === 'reset') {
        return setForm(initialValue);
      }
      return setForm({...form, [key]: value});
    },

    // console.log('isi form', form),
  ];
};

export default useForm;
