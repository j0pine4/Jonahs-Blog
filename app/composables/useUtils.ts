const useUtils = () => {

    const formatDate = (inputDate: string) => {
        // Convert the incoming string date into an actual date object
        let dateConvert = new Date((inputDate)).toDateString();
        return dateConvert
    }

    return {
        formatDate
    }

}

export default useUtils;