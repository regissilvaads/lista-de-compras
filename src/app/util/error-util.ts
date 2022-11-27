import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export class ErrorUtils {
  public static handleError(error: HttpErrorResponse) {
    console.log('handleError');
    let errorMessage = '';
    console.log(error);
    if (error instanceof Error || error instanceof ErrorEvent) {
      console.error('cliente');
      errorMessage = 'Opsssss! Um problema inesperado aconteceu! (lado cliente)';
    } else {
      console.error('servidor');
      errorMessage = ErrorUtils.getServerErrorMessage(error);
    }

    return throwError(new Error(errorMessage));
  }

  private static getServerErrorMessage(error: HttpErrorResponse) {
    switch (error.status) {
      case 404: {
        return `O recurso informado não foi encontrado!`;
      }
      case 403: {
        return `O acesso negado!`;
      }
      case 500: {
        return `Opps! Um erro inesperado aconteceu!`;
      }
      default: {
        return `Opppssssss! Um erro inesperado aconteceu! Favor tente novamente mais tarde!`;
      }
    }
  }
}
