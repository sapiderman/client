// @flow

// This file is auto-generated by client/protocol/Makefile.
import * as gregor1 from './flow-types-gregor'

import engine from '../../engine'
import type {Exact} from './more'
export type int = number
export type int64 = number
export type uint = number
export type uint64 = number
export type long = number
export type double = number
export type bytes = any
export type RPCError = {
  code: number,
  desc: string
}
export type WaitingHandlerType = (waiting: boolean, method: string, sessionID: number) => void

// $FlowIssue we're calling an internal method on engine that's there just for us
const engineRpcOutgoing = (...args) => engine()._rpcOutgoing(...args)

type requestCommon = {
  waitingHandler?: WaitingHandlerType,
  incomingCallMap?: any,
}

type requestErrorCallback = {
  callback?: ?(err: ?any) => void
}

type RPCErrorHandler = (err: RPCError) => void

type CommonResponseHandler = {
  error: RPCErrorHandler,
  result: (...rest: Array<void>) => void,
}
export const CommonMessageType = {
  none: 0,
  text: 1,
  attachment: 2,
  edit: 3,
  delete: 4,
  metadata: 5,
  tlfname: 6,
}

export const CommonTLFVisibility = {
  any: 0,
  public: 1,
  private: 2,
}

export const CommonTopicType = {
  none: 0,
  chat: 1,
  dev: 2,
}

export const LocalBodyPlaintextVersion = {
  v1: 1,
}

export const LocalHeaderPlaintextVersion = {
  v1: 1,
}

export const LocalMessagePlaintextVersion = {
  v1: 1,
}

export function localGetInboxLocalRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: localGetInboxLocalResult) => void} & {param: localGetInboxLocalRpcParam}>) {
  engineRpcOutgoing({...request, method: 'local.getInboxLocal'})
}

export function localGetInboxLocalRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localGetInboxLocalResult) => void} & {param: localGetInboxLocalRpcParam}>): Promise<localGetInboxLocalResult> {
  return new Promise((resolve, reject) => { localGetInboxLocalRpc({...request, param: request.param, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function localGetInboxSummaryLocalRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: localGetInboxSummaryLocalResult) => void} & {param: localGetInboxSummaryLocalRpcParam}>) {
  engineRpcOutgoing({...request, method: 'local.getInboxSummaryLocal'})
}

export function localGetInboxSummaryLocalRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localGetInboxSummaryLocalResult) => void} & {param: localGetInboxSummaryLocalRpcParam}>): Promise<localGetInboxSummaryLocalResult> {
  return new Promise((resolve, reject) => { localGetInboxSummaryLocalRpc({...request, param: request.param, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function localGetMessagesLocalRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: localGetMessagesLocalResult) => void} & {param: localGetMessagesLocalRpcParam}>) {
  engineRpcOutgoing({...request, method: 'local.getMessagesLocal'})
}

export function localGetMessagesLocalRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localGetMessagesLocalResult) => void} & {param: localGetMessagesLocalRpcParam}>): Promise<localGetMessagesLocalResult> {
  return new Promise((resolve, reject) => { localGetMessagesLocalRpc({...request, param: request.param, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function localGetThreadLocalRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: localGetThreadLocalResult) => void} & {param: localGetThreadLocalRpcParam}>) {
  engineRpcOutgoing({...request, method: 'local.getThreadLocal'})
}

export function localGetThreadLocalRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localGetThreadLocalResult) => void} & {param: localGetThreadLocalRpcParam}>): Promise<localGetThreadLocalResult> {
  return new Promise((resolve, reject) => { localGetThreadLocalRpc({...request, param: request.param, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function localNewConversationLocalRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: localNewConversationLocalResult) => void} & {param: localNewConversationLocalRpcParam}>) {
  engineRpcOutgoing({...request, method: 'local.newConversationLocal'})
}

export function localNewConversationLocalRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localNewConversationLocalResult) => void} & {param: localNewConversationLocalRpcParam}>): Promise<localNewConversationLocalResult> {
  return new Promise((resolve, reject) => { localNewConversationLocalRpc({...request, param: request.param, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function localPostLocalRpc (request: Exact<requestCommon & requestErrorCallback & {param: localPostLocalRpcParam}>) {
  engineRpcOutgoing({...request, method: 'local.postLocal'})
}

export function localPostLocalRpcPromise (request: $Exact<requestCommon & requestErrorCallback & {param: localPostLocalRpcParam}>): Promise<any> {
  return new Promise((resolve, reject) => { localPostLocalRpc({...request, param: request.param, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function localResolveConversationLocalRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: localResolveConversationLocalResult) => void} & {param: localResolveConversationLocalRpcParam}>) {
  engineRpcOutgoing({...request, method: 'local.resolveConversationLocal'})
}

export function localResolveConversationLocalRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: localResolveConversationLocalResult) => void} & {param: localResolveConversationLocalRpcParam}>): Promise<localResolveConversationLocalResult> {
  return new Promise((resolve, reject) => { localResolveConversationLocalRpc({...request, param: request.param, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function localUpdateTopicNameLocalRpc (request: Exact<requestCommon & requestErrorCallback & {param: localUpdateTopicNameLocalRpcParam}>) {
  engineRpcOutgoing({...request, method: 'local.updateTopicNameLocal'})
}

export function localUpdateTopicNameLocalRpcPromise (request: $Exact<requestCommon & requestErrorCallback & {param: localUpdateTopicNameLocalRpcParam}>): Promise<any> {
  return new Promise((resolve, reject) => { localUpdateTopicNameLocalRpc({...request, param: request.param, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function remoteGetInboxRemoteRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: remoteGetInboxRemoteResult) => void} & {param: remoteGetInboxRemoteRpcParam}>) {
  engineRpcOutgoing({...request, method: 'remote.getInboxRemote'})
}

export function remoteGetInboxRemoteRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteGetInboxRemoteResult) => void} & {param: remoteGetInboxRemoteRpcParam}>): Promise<remoteGetInboxRemoteResult> {
  return new Promise((resolve, reject) => { remoteGetInboxRemoteRpc({...request, param: request.param, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function remoteGetMessagesRemoteRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: remoteGetMessagesRemoteResult) => void} & {param: remoteGetMessagesRemoteRpcParam}>) {
  engineRpcOutgoing({...request, method: 'remote.getMessagesRemote'})
}

export function remoteGetMessagesRemoteRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteGetMessagesRemoteResult) => void} & {param: remoteGetMessagesRemoteRpcParam}>): Promise<remoteGetMessagesRemoteResult> {
  return new Promise((resolve, reject) => { remoteGetMessagesRemoteRpc({...request, param: request.param, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function remoteGetThreadRemoteRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: remoteGetThreadRemoteResult) => void} & {param: remoteGetThreadRemoteRpcParam}>) {
  engineRpcOutgoing({...request, method: 'remote.getThreadRemote'})
}

export function remoteGetThreadRemoteRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteGetThreadRemoteResult) => void} & {param: remoteGetThreadRemoteRpcParam}>): Promise<remoteGetThreadRemoteResult> {
  return new Promise((resolve, reject) => { remoteGetThreadRemoteRpc({...request, param: request.param, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function remoteMarkAsReadRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: remoteMarkAsReadResult) => void} & {param: remoteMarkAsReadRpcParam}>) {
  engineRpcOutgoing({...request, method: 'remote.markAsRead'})
}

export function remoteMarkAsReadRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteMarkAsReadResult) => void} & {param: remoteMarkAsReadRpcParam}>): Promise<remoteMarkAsReadResult> {
  return new Promise((resolve, reject) => { remoteMarkAsReadRpc({...request, param: request.param, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function remoteNewConversationRemote2Rpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: remoteNewConversationRemote2Result) => void} & {param: remoteNewConversationRemote2RpcParam}>) {
  engineRpcOutgoing({...request, method: 'remote.newConversationRemote2'})
}

export function remoteNewConversationRemote2RpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteNewConversationRemote2Result) => void} & {param: remoteNewConversationRemote2RpcParam}>): Promise<remoteNewConversationRemote2Result> {
  return new Promise((resolve, reject) => { remoteNewConversationRemote2Rpc({...request, param: request.param, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function remoteNewConversationRemoteRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: remoteNewConversationRemoteResult) => void} & {param: remoteNewConversationRemoteRpcParam}>) {
  engineRpcOutgoing({...request, method: 'remote.newConversationRemote'})
}

export function remoteNewConversationRemoteRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteNewConversationRemoteResult) => void} & {param: remoteNewConversationRemoteRpcParam}>): Promise<remoteNewConversationRemoteResult> {
  return new Promise((resolve, reject) => { remoteNewConversationRemoteRpc({...request, param: request.param, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function remotePostRemoteRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: remotePostRemoteResult) => void} & {param: remotePostRemoteRpcParam}>) {
  engineRpcOutgoing({...request, method: 'remote.postRemote'})
}

export function remotePostRemoteRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remotePostRemoteResult) => void} & {param: remotePostRemoteRpcParam}>): Promise<remotePostRemoteResult> {
  return new Promise((resolve, reject) => { remotePostRemoteRpc({...request, param: request.param, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export function remoteTlfFinalizeRpc (request: Exact<requestCommon & {callback?: ?(err: ?any, response: remoteTlfFinalizeResult) => void} & {param: remoteTlfFinalizeRpcParam}>) {
  engineRpcOutgoing({...request, method: 'remote.tlfFinalize'})
}

export function remoteTlfFinalizeRpcPromise (request: $Exact<requestCommon & {callback?: ?(err: ?any, response: remoteTlfFinalizeResult) => void} & {param: remoteTlfFinalizeRpcParam}>): Promise<remoteTlfFinalizeResult> {
  return new Promise((resolve, reject) => { remoteTlfFinalizeRpc({...request, param: request.param, callback: (error, result) => { if (error) { reject(error) } else { resolve(result) } }}) })
}

export type BodyPlaintext = 
    { version : 1, v1 : ?BodyPlaintextV1 }

export type BodyPlaintextV1 = {
  messageBody: MessageBody,
}

export type BodyPlaintextVersion = 
    1 // V1_1

export type Conversation = {
  metadata: ConversationMetadata,
  readerInfo?: ?ConversationReaderInfo,
  supersedes?: ?ConversationMetadata,
  supersededBy?: ?ConversationMetadata,
  maxMsgs?: ?Array<MessageBoxed>,
}

export type ConversationID = uint64

export type ConversationIDTriple = {
  tlfid: TLFID,
  topicType: TopicType,
  topicID: TopicID,
}

export type ConversationInfoLocal = {
  id: ConversationID,
  triple: ConversationIDTriple,
  tlfName: string,
  topicName: string,
  topicType: TopicType,
  visibility: TLFVisibility,
}

export type ConversationLocal = {
  info?: ?ConversationInfoLocal,
  messages?: ?Array<Message>,
}

export type ConversationMetadata = {
  idTriple: ConversationIDTriple,
  conversationID: ConversationID,
  isFinalized: bool,
}

export type ConversationReaderInfo = {
  mtime: gregor1.Time,
  readMsgid: MessageID,
  maxMsgid: MessageID,
}

export type EncryptedData = {
  v: int,
  e: bytes,
  n: bytes,
}

export type GenericPayload = {
  Action: string,
}

export type GetConversationMetadataRemoteRes = {
  conv: Conversation,
  rateLimit?: ?RateLimit,
}

export type GetInboxByTLFIDRemoteRes = {
  convs?: ?Array<Conversation>,
  rateLimit?: ?RateLimit,
}

export type GetInboxQuery = {
  convID?: ?ConversationID,
  topicType?: ?TopicType,
  tlfID?: ?TLFID,
  tlfVisibility?: ?TLFVisibility,
  before?: ?gregor1.Time,
  after?: ?gregor1.Time,
  oneChatTypePerTLF?: ?boolean,
  unreadOnly: boolean,
}

export type GetInboxRemoteRes = {
  inbox: InboxView,
  rateLimit?: ?RateLimit,
}

export type GetInboxSummaryLocalRes = {
  conversations?: ?Array<ConversationLocal>,
  more?: ?Array<ConversationLocal>,
  moreTotal: int,
}

export type GetMessagesRemoteRes = {
  msgs?: ?Array<MessageBoxed>,
  rateLimit?: ?RateLimit,
}

export type GetThreadQuery = {
  markAsRead: boolean,
  messageTypes?: ?Array<MessageType>,
  before?: ?gregor1.Time,
  after?: ?gregor1.Time,
}

export type GetThreadRemoteRes = {
  thread: ThreadViewBoxed,
  rateLimit?: ?RateLimit,
}

export type Hash = bytes

export type HeaderPlaintext = 
    { version : 1, v1 : ?HeaderPlaintextV1 }

export type HeaderPlaintextV1 = {
  conv: ConversationIDTriple,
  tlfName: string,
  tlfPublic: boolean,
  messageType: MessageType,
  prev?: ?Array<MessagePreviousPointer>,
  sender: gregor1.UID,
  senderDevice: gregor1.DeviceID,
  bodyHash: Hash,
  headerSignature?: ?SignatureInfo,
}

export type HeaderPlaintextVersion = 
    1 // V1_1

export type InboxView = {
  conversations?: ?Array<Conversation>,
  pagination?: ?Pagination,
}

export type MarkAsReadRes = {
  rateLimit?: ?RateLimit,
}

export type Message = {
  serverHeader: MessageServerHeader,
  messagePlaintext: MessagePlaintext,
  info?: ?MessageInfoLocal,
}

export type MessageAttachment = {
  path: string,
}

export type MessageBody = 
    { messageType : 1, text : ?MessageText }
  | { messageType : 2, attachment : ?MessageAttachment }
  | { messageType : 3, edit : ?MessageEdit }
  | { messageType : 4, delete : ?MessageDelete }
  | { messageType : 5, metadata : ?MessageConversationMetadata }

export type MessageBoxed = {
  serverHeader?: ?MessageServerHeader,
  supersededBy?: ?MessageBoxed,
  clientHeader: MessageClientHeader,
  headerCiphertext: EncryptedData,
  bodyCiphertext: EncryptedData,
  keyGeneration: int,
}

export type MessageClientHeader = {
  conv: ConversationIDTriple,
  tlfName: string,
  tlfPublic: boolean,
  messageType: MessageType,
  supersedes: MessageID,
  prev?: ?Array<MessagePreviousPointer>,
  sender: gregor1.UID,
  senderDevice: gregor1.DeviceID,
}

export type MessageConversationMetadata = {
  conversationTitle: string,
}

export type MessageDelete = {
  messageID: MessageID,
}

export type MessageEdit = {
  messageID: MessageID,
  body: string,
}

export type MessageID = uint

export type MessageInfoLocal = {
  isNew: boolean,
  senderUsername: string,
  senderDeviceName: string,
}

export type MessagePlaintext = 
    { version : 1, v1 : ?MessagePlaintextV1 }

export type MessagePlaintextV1 = {
  clientHeader: MessageClientHeader,
  messageBody: MessageBody,
}

export type MessagePlaintextVersion = 
    1 // V1_1

export type MessagePreviousPointer = {
  id: MessageID,
  hash: Hash,
}

export type MessageSelector = {
  MessageTypes?: ?Array<MessageType>,
  Since?: ?string,
  onlyNew: boolean,
  limit: int,
  conversations?: ?Array<ConversationID>,
  markAsRead: boolean,
}

export type MessageServerHeader = {
  messageType: MessageType,
  messageID: MessageID,
  sender: gregor1.UID,
  senderDevice: gregor1.DeviceID,
  supersededBy: MessageID,
  supersedes: MessageID,
  ctime: gregor1.Time,
}

export type MessageText = {
  body: string,
}

export type MessageType = 
    0 // NONE_0
  | 1 // TEXT_1
  | 2 // ATTACHMENT_2
  | 3 // EDIT_3
  | 4 // DELETE_4
  | 5 // METADATA_5
  | 6 // TLFNAME_6

export type NewConversationRemoteRes = {
  convID: ConversationID,
  rateLimit?: ?RateLimit,
}

export type NewMessagePayload = {
  Action: string,
  convID: ConversationID,
  message: MessageBoxed,
}

export type Pagination = {
  next: bytes,
  previous: bytes,
  num: int,
  last: boolean,
}

export type PostRemoteRes = {
  msgID: MessageID,
  rateLimit?: ?RateLimit,
}

export type RateLimit = {
  callsRemaining: int,
  windowReset: int,
  maxCalls: int,
}

export type SignatureInfo = {
  v: int,
  s: bytes,
  k: bytes,
}

export type TLFID = bytes

export type TLFVisibility = 
    0 // ANY_0
  | 1 // PUBLIC_1
  | 2 // PRIVATE_2

export type ThreadID = bytes

export type ThreadView = {
  messages?: ?Array<Message>,
  pagination?: ?Pagination,
}

export type ThreadViewBoxed = {
  messages?: ?Array<MessageBoxed>,
  pagination?: ?Pagination,
}

export type TopicID = bytes

export type TopicType = 
    0 // NONE_0
  | 1 // CHAT_1
  | 2 // DEV_2

export type localGetInboxLocalRpcParam = Exact<{
  query?: ?GetInboxQuery,
  pagination?: ?Pagination
}>

export type localGetInboxSummaryLocalRpcParam = Exact<{
  topicType: TopicType,
  after: string,
  before: string,
  limit: int,
  visibility: TLFVisibility
}>

export type localGetMessagesLocalRpcParam = Exact<{
  selector: MessageSelector
}>

export type localGetThreadLocalRpcParam = Exact<{
  conversationID: ConversationID,
  query?: ?GetThreadQuery,
  pagination?: ?Pagination
}>

export type localNewConversationLocalRpcParam = Exact<{
  conversation: ConversationInfoLocal
}>

export type localPostLocalRpcParam = Exact<{
  conversationID: ConversationID,
  messagePlaintext: MessagePlaintext
}>

export type localResolveConversationLocalRpcParam = Exact<{
  conversation: ConversationInfoLocal
}>

export type localUpdateTopicNameLocalRpcParam = Exact<{
  conversationID: ConversationID,
  newTopicName: string
}>

export type remoteGetInboxRemoteRpcParam = Exact<{
  query?: ?GetInboxQuery,
  pagination?: ?Pagination
}>

export type remoteGetMessagesRemoteRpcParam = Exact<{
  conversationID: ConversationID,
  messageIDs?: ?Array<MessageID>
}>

export type remoteGetThreadRemoteRpcParam = Exact<{
  conversationID: ConversationID,
  query?: ?GetThreadQuery,
  pagination?: ?Pagination
}>

export type remoteMarkAsReadRpcParam = Exact<{
  conversationID: ConversationID,
  msgID: MessageID
}>

export type remoteNewConversationRemote2RpcParam = Exact<{
  idTriple: ConversationIDTriple,
  TLFMessage: MessageBoxed
}>

export type remoteNewConversationRemoteRpcParam = Exact<{
  idTriple: ConversationIDTriple
}>

export type remotePostRemoteRpcParam = Exact<{
  conversationID: ConversationID,
  messageBoxed: MessageBoxed
}>

export type remoteTlfFinalizeRpcParam = Exact<{
  tlfID: TLFID
}>

type localGetInboxLocalResult = InboxView

type localGetInboxSummaryLocalResult = GetInboxSummaryLocalRes

type localGetMessagesLocalResult = ?Array<ConversationLocal>

type localGetThreadLocalResult = ThreadView

type localNewConversationLocalResult = ConversationInfoLocal

type localResolveConversationLocalResult = ?Array<ConversationInfoLocal>

type remoteGetInboxRemoteResult = GetInboxRemoteRes

type remoteGetMessagesRemoteResult = GetMessagesRemoteRes

type remoteGetThreadRemoteResult = GetThreadRemoteRes

type remoteMarkAsReadResult = MarkAsReadRes

type remoteNewConversationRemote2Result = NewConversationRemoteRes

type remoteNewConversationRemoteResult = NewConversationRemoteRes

type remotePostRemoteResult = PostRemoteRes

type remoteTlfFinalizeResult = bool

export type rpc =
    localGetInboxLocalRpc
  | localGetInboxSummaryLocalRpc
  | localGetMessagesLocalRpc
  | localGetThreadLocalRpc
  | localNewConversationLocalRpc
  | localPostLocalRpc
  | localResolveConversationLocalRpc
  | localUpdateTopicNameLocalRpc
  | remoteGetInboxRemoteRpc
  | remoteGetMessagesRemoteRpc
  | remoteGetThreadRemoteRpc
  | remoteMarkAsReadRpc
  | remoteNewConversationRemote2Rpc
  | remoteNewConversationRemoteRpc
  | remotePostRemoteRpc
  | remoteTlfFinalizeRpc
export type incomingCallMapType = Exact<{

}>
