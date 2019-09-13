export default {

    isArray(value) {
        return value && typeof value === 'object' && value.constructor === Array;
    },
   removeDataToHide(data, toHide) {
        if (toHide.length === 0) return data;
    
        if (this.isArray(data)) {
          return data.map((item)=> {
            Object.keys(item).map((key)=> (toHide.includes(key) ? delete item[key] : key));
            return item;
          });
        }
        Object.keys(data)
          .map((key)=> (toHide.includes(key) ? delete data[key] : key));
        return data;
      }    
}
