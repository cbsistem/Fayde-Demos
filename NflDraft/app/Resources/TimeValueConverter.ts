class TimeValueConverter implements Fayde.Data.IValueConverter {
    Convert(value: any, targetType: IType, parameter: any, culture: any): any {
        if (value === undefined) return "0:00";
        var div = Math.floor(value / 60).toString();
        var rem = (value % 60).toString();
        if (rem.length == 1) rem = "0" + rem;
        return div + ":" + rem;
    }
    ConvertBack(value: any, targetType: IType, parameter: any, culture: any): any {
        throw new Error("This ValueConverter only does conversion. It cannot convert back.");
    }
}
nullstone.addTypeInterfaces(TimeValueConverter, Fayde.Data.IValueConverter_);
export = TimeValueConverter;