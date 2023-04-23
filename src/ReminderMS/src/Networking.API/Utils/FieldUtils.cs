namespace Networking.API.Utils;

public static class FieldUtils
{
 //ToDo: Fazer leitura dos campos e verificar se estão válidos
 public static T? UpdateFieldOrUseDefault<T>(T value, T? defaultValue)
 {
    return EqualityComparer<T>.Default.Equals(value,defaultValue) ? defaultValue : value;
 }
}