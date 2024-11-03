namespace API;

public class ApiException(int statusCode, string messages, string? details)
{

    public int StatusCode { get; set; } = statusCode;
    public string Messages { get; set; } = messages;
    public string? Details { get; set; } = details;


}
