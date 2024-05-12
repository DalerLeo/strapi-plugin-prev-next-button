import { EntityService } from '@strapi/strapi'

export const transformEntry = (
  entry: EntityService.Result<any> | EntityService.Result<any>[] | null,
  mainField: string
) => {
  if (!entry || !entry?.[0]) return null;

  const { ...rest } = entry[0];
  return { id: rest.id, label: rest[mainField] };
}