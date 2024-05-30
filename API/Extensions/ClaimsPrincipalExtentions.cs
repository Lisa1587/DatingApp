﻿using System.Security.Claims;

namespace API.Extensions;

public static class ClaimsPrincipalExtentions
{
    public static string GetUsername(this ClaimsPrincipal user)
    {
        return user.FindFirst(ClaimTypes.Name)?.Value;

    }

    public static string GetUseId(this ClaimsPrincipal user)
    {
        return user.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        
    }
}
