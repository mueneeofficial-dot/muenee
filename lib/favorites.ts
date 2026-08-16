const FAVORITES_KEY = "favorites";

export function getFavorites(): string[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const data =
      window.localStorage.getItem(
        FAVORITES_KEY
      );

    if (!data) {
      return [];
    }

    const parsed: unknown = JSON.parse(data);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(
      (item): item is string =>
        typeof item === "string"
    );
  } catch {
    return [];
  }
}

export function toggleFavorite(
  id: string
): string[] {
  if (
    typeof window === "undefined" ||
    !id
  ) {
    return [];
  }

  const favorites = getFavorites();

  const exists = favorites.includes(id);

  const updated = exists
    ? favorites.filter(
        (item) => item !== id
      )
    : [...favorites, id];

  try {
    window.localStorage.setItem(
      FAVORITES_KEY,
      JSON.stringify(updated)
    );
  } catch {
    // Ignore localStorage errors.
  }

  return updated;
}

export function isFavorite(
  id: string
): boolean {
  if (!id) {
    return false;
  }

  return getFavorites().includes(id);
}