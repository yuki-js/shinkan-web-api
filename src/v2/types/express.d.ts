declare namespace Express {
  /** ユーザの認証情報 */
  interface AuthedUser {
    /** ユーザID */
    uid: string
    org?: any
  }

  export interface Request {
    /** 認証済みのユーザ情報 */
    auth?: AuthedUser
  }
}
