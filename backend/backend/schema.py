import graphene
from graphene_django.debug import DjangoDebug
from product.schema import Query as ProductQuery
from stock.schema import Query as StockQuery
from page.schema import Query as PageQuery
from account.schema import Query as AccountQuery, Mutation as AccountMutation


class Mutation(
    AccountMutation,
    graphene.ObjectType):
    debug = graphene.Field(DjangoDebug, name="_debug")


class Query(
    ProductQuery,
    PageQuery,
    StockQuery,
    AccountQuery,
    graphene.ObjectType):
    debug = graphene.Field(DjangoDebug, name="_debug")


schema = graphene.Schema(query=Query, mutation=Mutation)
